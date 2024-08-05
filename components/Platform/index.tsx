import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

export default function Platform() {
  return (
    <section className="bg-black text-white">
      <Container>
        <div className="text-center">
          <p className="heading-md font-inter font-extrabold leading-none text-red-400">
            Platform overview
          </p>
          <SectionTitle size="display-md" className="font-light leading-[1.2]">
            Sanity Composable Content Cloud
          </SectionTitle>
        </div>
      </Container>
    </section>
  );
}
