import os
import subprocess
from PIL import Image, ImageEnhance
import numpy as np

def main():
    os.makedirs("public/images", exist_ok=True)
    os.makedirs("public/videos", exist_ok=True)

    # 1. Process Magda Bio portrait (from Media/magda1.png) with subtle Quiet Space warmth
    print("Processing & color-grading Magda portrait...")
    im_magda = Image.open("Media/magda1.png").convert("RGB")
    arr_magda = np.array(im_magda, dtype=np.float32) / 255.0

    # Warm linen highlight tint (#FDFBF7 / #F8F6F0)
    hl_mask = np.clip((arr_magda - 0.5) / 0.5, 0, 1)
    arr_magda[:, :, 0] += hl_mask[:, :, 0] * 0.025
    arr_magda[:, :, 1] += hl_mask[:, :, 1] * 0.015
    arr_magda[:, :, 2] -= hl_mask[:, :, 2] * 0.015

    # Gentle ambient shadow lift (slate/sage #2C332D / #7D8C7A)
    sh_mask = np.clip((0.5 - arr_magda) / 0.5, 0, 1)
    arr_magda[:, :, 0] += sh_mask[:, :, 0] * 0.010
    arr_magda[:, :, 1] += sh_mask[:, :, 1] * 0.018
    arr_magda[:, :, 2] += sh_mask[:, :, 2] * 0.012

    arr_magda = np.clip(arr_magda, 0.0, 1.0)
    im_magda_graded = Image.fromarray((arr_magda * 255.0).astype(np.uint8))

    # Natural skin tone balance and soft contrast curve
    im_magda_graded = ImageEnhance.Color(im_magda_graded).enhance(0.94)
    im_magda_graded = ImageEnhance.Contrast(im_magda_graded).enhance(0.97)

    w, h = im_magda_graded.size
    target_w = 900
    target_h = int(h * (target_w / w))
    im_magda_resized = im_magda_graded.resize((target_w, target_h), Image.Resampling.LANCZOS)
    im_magda_resized.save("public/images/magda-bio.webp", "WEBP", quality=92)
    im_magda_resized.save("public/images/magda-bio.jpg", "JPEG", quality=92)
    print("Saved public/images/magda-bio.webp (color-graded)")

    # 2. Process Client Photos with Quiet Space Brand Color Grading
    print("Grading client photos...")
    def grade_image(src, dst_base):
        im = Image.open(src).convert("RGB")
        arr = np.array(im, dtype=np.float32) / 255.0
        
        # Warm highlight tint (towards warm linen #f8f6f0)
        highlight_mask = np.clip((arr - 0.5) / 0.5, 0, 1)
        arr[:, :, 0] += highlight_mask[:, :, 0] * 0.03
        arr[:, :, 1] += highlight_mask[:, :, 1] * 0.02
        arr[:, :, 2] -= highlight_mask[:, :, 2] * 0.02

        # Slate-sage shadow lift
        shadow_mask = np.clip((0.5 - arr) / 0.5, 0, 1)
        arr[:, :, 1] += shadow_mask[:, :, 1] * 0.02
        arr[:, :, 2] += shadow_mask[:, :, 2] * 0.015

        arr = np.clip(arr, 0.0, 1.0)
        im_out = Image.fromarray((arr * 255.0).astype(np.uint8))

        # Soften saturation & subtle contrast roll-off
        im_out = ImageEnhance.Color(im_out).enhance(0.85)
        im_out = ImageEnhance.Contrast(im_out).enhance(0.96)

        w, h = im_out.size
        t_w = 1080
        t_h = int(h * (t_w / w))
        im_final = im_out.resize((t_w, t_h), Image.Resampling.LANCZOS)
        im_final.save(f"{dst_base}.webp", "WEBP", quality=88)
        im_final.save(f"{dst_base}.jpg", "JPEG", quality=88)
        print(f"Saved {dst_base}.webp")

    grade_image("Media/IMG-20260914-WA0000.jpg", "public/images/quiet-space-real-crockery")
    grade_image("Media/IMG-20260914-WA0002.jpg", "public/images/quiet-space-real-glassware")

    # 3. Concatenate Highlight Reel
    print("Creating merged highlight reel...")
    concat_file = "public/videos/concat_list.txt"
    with open(concat_file, "w", encoding="utf-8") as f:
        f.write("file 'clip-cutlery.mp4'\n")
        f.write("file 'clip-utensils.mp4'\n")
        f.write("file 'clip-island.mp4'\n")

    cmd = [
        "ffmpeg", "-y", "-f", "concat", "-safe", "0",
        "-i", concat_file,
        "-c", "copy",
        "-movflags", "+faststart",
        "public/videos/quiet-space-reel.mp4"
    ]
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode == 0:
        size_kb = os.path.getsize("public/videos/quiet-space-reel.mp4") / 1024
        print(f"Successfully generated public/videos/quiet-space-reel.mp4 ({size_kb:.1f} KB)")
    else:
        print("Error creating reel:", res.stderr)

    if os.path.exists(concat_file):
        os.remove(concat_file)

if __name__ == "__main__":
    main()
