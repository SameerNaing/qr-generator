import os
from typing import Union
import qrcode
from PIL import Image


__all__ = ["create_qr"]


def create_qr(image_name: str, link: str, logo: Union[str, None], output_folder: str):
    """Function to create QR

    Args:
        image_name (str): qr image name
        link (str): link for qr
        logo (Union[str, None]): logo in the middle of qr
        output_folder (str): the output folder of the generated qr
    """
    output_path = os.path.join(output_folder, image_name + ".png")

    qr_code = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_H)

    qr_code.add_data(link)
    qr_code.make()

    qr_img = qr_code.make_image(
        fill_color="Black", back_color="white").convert("RGB")

    if logo:
        basewidth = 100
        logo = Image.open(logo)
        wpercent = (basewidth/float(logo.size[0]))
        hsize = int((float(logo.size[1])*float(wpercent)))
        logo = logo.resize((basewidth, hsize), Image.ANTIALIAS)
        pos = ((qr_img.size[0] - logo.size[0]) // 2,
               (qr_img.size[1] - logo.size[1]) // 2)
        qr_img.paste(logo, pos)

    qr_img.save(output_path)
