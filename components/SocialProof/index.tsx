import Container from "@/components/Container";
import Image from "next/image";

export default function SocialProof({ items }: { items: any }) {
  return (
    <div>
      <Container>
        <div>Mobile Scroll</div>

        <div className="grid grid-cols-2 gap-16">
          {items.map(({ images }: { images: any }, index: number) => {
            return (
              <div className="grid grid-cols-4 gap-12" key={index}>
                {images.map(({ asset, alt }: { asset: any; alt: string }) => {
                  return (
                    <Image
                      key={index}
                      src={asset.url}
                      alt={alt}
                      width={asset.metadata.dimensions.width}
                      height={asset.metadata.dimensions.height}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
