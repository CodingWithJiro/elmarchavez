'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface CertificateImageProps {
  src: string;
  alt: string;
  title: string;
}

export default function CertificateImage({
  src,
  alt,
  title,
}: CertificateImageProps) {
  const [open, setOpen] = useState(false);
  const slides = useMemo(
    () => [
      {
        src,
        alt,
        width: 1250,
        height: 830,
      },
    ],
    [src, alt],
  );

  const handleClick = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button
        className="mb-4 block w-full cursor-pointer"
        type="button"
        onClick={handleClick}
        aria-label={`Enlarge and view ${title} certificate.`}
      >
        <Image
          className="border-ring/20 border"
          src={src}
          alt={alt}
          width={1250}
          height={830}
          loading="eager"
        />
      </button>

      <Lightbox
        open={open}
        close={handleClose}
        slides={slides}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
      />
    </>
  );
}
