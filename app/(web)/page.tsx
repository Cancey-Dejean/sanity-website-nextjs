import { QueryParams, SanityDocument } from "next-sanity";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/fetch";
import { Metadata } from "next";
import { Sections } from "@/components/Sections";
import { PAGE_QUERY, PAGES_QUERY } from "@/sanity/lib/queries/pages/page";
import AddContent from "@/components/AddContent";
import { fetchPageMetadata } from "@/utils/metadata";

export async function generateMetadata({
  params,
}: {
  params: QueryParams;
}): Promise<Metadata> {
  const slug = params.slug || "home";
  const metadata = await fetchPageMetadata(slug);

  if (!metadata) return notFound();

  return metadata;
}

export async function generateStaticParams() {
  const pages = await sanityFetch<SanityDocument[]>({
    query: PAGES_QUERY,
    perspective: "published",
    stega: false,
  });

  return pages.map((page) => ({
    slug: page.currentSlug,
  }));
}

export default async function Page({ params }: { params: QueryParams }) {
  const slug = params.slug || "home";

  const page = await sanityFetch<SanityDocument>({
    query: PAGE_QUERY,
    params: { slug },
  });

  const pageBuilder = page.pageBuilder;

  console.log(pageBuilder);

  if (!page) {
    return notFound();
  }

  if (pageBuilder === null) {
    return <AddContent />;
  }

  return (
    <>
      {pageBuilder.map(Sections)}

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam
        architecto aspernatur commodi cupiditate doloremque ducimus labore
        laboriosam minima mollitia pariatur quae, quos sed totam ut. Aperiam
        assumenda beatae fuga in molestiae sed sint suscipit tenetur? Ad animi
        beatae culpa debitis dicta dolor eum facere facilis fugiat harum laborum
        libero maxime minima nam nihil optio, quaerat quas repellat, sint
        tenetur ullam vel voluptas. A ab accusamus ad, aliquid aspernatur aut
        deleniti doloremque ducimus fugiat hic illo modi natus, nisi non odit
        placeat possimus quae quasi quia quibusdam saepe tenetur vitae
        voluptatum! At commodi, culpa cum cupiditate deleniti fugit inventore
        sint! Ab aspernatur aut consectetur distinctio dolorum eos et eum,
        explicabo, facilis fugit harum in laudantium magnam magni, minus neque
        nihil nisi odit officia omnis placeat porro possimus praesentium quaerat
        repellat reprehenderit sapiente similique sint suscipit temporibus vero
        vitae voluptate voluptates! Ab aperiam distinctio eius fugiat, ipsa
        magni officia possimus quas quasi reprehenderit sapiente, similique
        totam vel. Ab alias animi aperiam assumenda dignissimos eveniet
        excepturi in libero magnam maxime, minus necessitatibus non, odit
        perferendis sed soluta sunt vel, vitae voluptates voluptatibus. Amet
        consectetur corporis facere nisi nulla officiis perferendis sapiente
        sequi. A aliquid debitis error, est laborum modi molestiae nisi nostrum,
        repellat rerum sint sit. Ad consequatur deserunt esse magnam natus neque
        pariatur! Amet asperiores doloremque error impedit ipsam, iure iusto
        maiores minus nemo officia provident quam quidem sit velit voluptatem?
        Amet exercitationem fuga illum officiis quis recusandae, sunt ullam.
        Alias excepturi quas quasi? Ad amet at atque blanditiis commodi delectus
        deserunt dicta dignissimos distinctio dolorum error esse eum
        exercitationem expedita facilis fugiat fugit impedit inventore iste
        natus obcaecati officia provident quam quo repudiandae, similique
        tenetur! Dolorum ex in maiores minus omnis optio praesentium, rerum sint
        vel vitae. Ex fuga perspiciatis porro! Aut doloremque ex expedita illo
        mollitia obcaecati quidem quod temporibus. Accusantium error explicabo
        id soluta vero. Accusamus alias autem dicta dolor dolore ea enim eos
        esse est excepturi fugit ipsam ipsum iste laborum libero nemo nihil
        perspiciatis placeat praesentium quis quos repudiandae sapiente sequi
        similique tempore ut voluptas, voluptate voluptates voluptatibus
        voluptatum. Animi aspernatur atque aut beatae, debitis delectus, dolorem
        doloribus ea excepturi facere fuga illo itaque laudantium molestias nisi
        obcaecati quaerat quibusdam quo rem suscipit tempore ullam unde veniam?
        Accusantium aliquam aliquid amet commodi consequatur deleniti, dolores
        fuga fugiat fugit incidunt odio perferendis porro tempora veniam,
        voluptatibus. Amet at atque, culpa deleniti earum eius expedita fuga
        fugit mollitia quae qui reiciendis repellat voluptates. Ab atque
        consequuntur, delectus dicta dolor est eum, expedita explicabo ipsam
        itaque non officia porro provident quasi quia rerum suscipit tenetur.
        Assumenda eius esse excepturi illo molestiae molestias non optio rem.
        Amet aperiam assumenda autem cupiditate delectus deserunt dicta
        distinctio dolor dolores doloribus, ducimus eos, et eum explicabo fugiat
        hic illo inventore magni maxime nam nemo nobis numquam pariatur quam
        quidem quod reprehenderit saepe vel voluptate voluptates. Animi
        blanditiis consectetur culpa cum cumque debitis delectus dignissimos
        dolores ducimus esse fuga fugit illo impedit itaque molestiae nisi non
        nostrum nulla numquam odio odit pariatur placeat praesentium quaerat
        ratione repellat repellendus reprehenderit saepe sint tempore temporibus
        totam ullam unde vel veniam, voluptas voluptatum? Aspernatur consectetur
        culpa labore maxime minus saepe! Facere facilis harum ipsum laborum
        mollitia praesentium provident quisquam, quod. Distinctio expedita modi
        mollitia sapiente similique. Consequuntur dignissimos dolorum iusto,
        nostrum porro qui sit veritatis. Ab aperiam, architecto beatae dolorem
        earum fugit, harum impedit minus nostrum ratione reprehenderit
        repudiandae? Accusantium beatae cum cumque debitis, exercitationem
        incidunt magnam maxime minima neque quidem quis quod! Ad assumenda
        beatae cumque doloribus earum enim et ex illo minima, modi molestiae
        molestias necessitatibus omnis quod recusandae, sit totam. Accusamus
        atque aut, beatae blanditiis consectetur doloremque enim esse, et
        expedita illum impedit molestias nobis non odit perspiciatis quae quo
        reprehenderit tempore. Amet debitis dolore expedita fuga illum iure
        labore, laborum omnis, placeat porro praesentium quia quibusdam
        repudiandae similique, suscipit totam velit! A architecto aspernatur
        deserunt est eum hic laboriosam laudantium maiores minima necessitatibus
        non nostrum perspiciatis quis quod, ratione recusandae repudiandae
        tempora tempore temporibus totam unde veniam voluptatem? Hic impedit
        libero magnam quas sed? Accusantium aliquid asperiores atque consectetur
        dolorem doloribus ducimus ea eligendi error excepturi harum impedit in
        labore molestias neque nihil nisi odit, optio perspiciatis placeat quam,
        qui quia quibusdam quod rem suscipit vero voluptates. Aperiam at debitis
        ea expedita hic, impedit ipsa ipsam non obcaecati vitae! Accusantium
        architecto asperiores aspernatur beatae consequatur cupiditate
        distinctio, enim eveniet ex fugit id ipsum, magni molestiae molestias
        nihil nisi perspiciatis placeat praesentium ratione repellat repellendus
        sunt suscipit, totam veniam veritatis voluptates voluptatibus. Aperiam
        incidunt inventore iusto magnam nisi pariatur quia. Adipisci aperiam
        asperiores, corporis cum debitis dolore doloremque doloribus eaque earum
        eius ex expedita fuga fugiat id impedit ipsam itaque nam, neque nobis
        nulla provident quasi quo quos reiciendis repudiandae suscipit totam
        unde! Accusamus alias architecto assumenda consectetur cum dolore, fuga
        hic labore laborum magnam minima molestiae omnis porro, quam, quia rem
        reprehenderit sit soluta vel veniam. A blanditiis enim fuga maxime nam
        numquam, obcaecati officia reiciendis veritatis! Amet eius eligendi est
        harum incidunt iusto non nostrum praesentium! Ab, accusantium commodi
        culpa dolore eligendi error facere fugiat fugit id ipsa iste sint
        suscipit, veritatis. Accusamus architecto, autem dolor ducimus eius
        eveniet fuga obcaecati officiis placeat quis, repellat sed soluta
        tempora? Animi asperiores consequuntur corporis in incidunt ipsum
        laudantium possimus, praesentium quae quasi quisquam, quod tempora
        voluptatum. Adipisci architecto, culpa cupiditate dolores ex facilis
        labore magni, nostrum obcaecati pariatur placeat recusandae repellat
        repudiandae tempora vel veritatis, voluptatibus! Ipsam, nemo, quae.
        Dolorum, eaque ipsam. A ad aperiam beatae consequatur consequuntur culpa
        cupiditate eligendi ex fugit illum ipsam ipsum labore modi molestiae
        necessitatibus, nemo neque nihil obcaecati porro quae quaerat quidem
        reprehenderit repudiandae saepe sint tempore voluptate! At atque beatae
        culpa cum, debitis delectus distinctio eius eligendi error, facilis
        fugiat iure modi nulla officia vero? Accusamus accusantium adipisci
        aliquid deleniti dignissimos dolor eos eum explicabo ipsa natus nihil,
        officia possimus reiciendis, rem tenetur ut vero. Ab beatae blanditiis
        commodi cupiditate dolorem ea libero minima minus necessitatibus, nobis,
        quas quasi qui quis recusandae reprehenderit totam ullam voluptate.
        Recusandae.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam
        architecto aspernatur commodi cupiditate doloremque ducimus labore
        laboriosam minima mollitia pariatur quae, quos sed totam ut. Aperiam
        assumenda beatae fuga in molestiae sed sint suscipit tenetur? Ad animi
        beatae culpa debitis dicta dolor eum facere facilis fugiat harum laborum
        libero maxime minima nam nihil optio, quaerat quas repellat, sint
        tenetur ullam vel voluptas. A ab accusamus ad, aliquid aspernatur aut
        deleniti doloremque ducimus fugiat hic illo modi natus, nisi non odit
        placeat possimus quae quasi quia quibusdam saepe tenetur vitae
        voluptatum! At commodi, culpa cum cupiditate deleniti fugit inventore
        sint! Ab aspernatur aut consectetur distinctio dolorum eos et eum,
        explicabo, facilis fugit harum in laudantium magnam magni, minus neque
        nihil nisi odit officia omnis placeat porro possimus praesentium quaerat
        repellat reprehenderit sapiente similique sint suscipit temporibus vero
        vitae voluptate voluptates! Ab aperiam distinctio eius fugiat, ipsa
        magni officia possimus quas quasi reprehenderit sapiente, similique
        totam vel. Ab alias animi aperiam assumenda dignissimos eveniet
        excepturi in libero magnam maxime, minus necessitatibus non, odit
        perferendis sed soluta sunt vel, vitae voluptates voluptatibus. Amet
        consectetur corporis facere nisi nulla officiis perferendis sapiente
        sequi. A aliquid debitis error, est laborum modi molestiae nisi nostrum,
        repellat rerum sint sit. Ad consequatur deserunt esse magnam natus neque
        pariatur! Amet asperiores doloremque error impedit ipsam, iure iusto
        maiores minus nemo officia provident quam quidem sit velit voluptatem?
        Amet exercitationem fuga illum officiis quis recusandae, sunt ullam.
        Alias excepturi quas quasi? Ad amet at atque blanditiis commodi delectus
        deserunt dicta dignissimos distinctio dolorum error esse eum
        exercitationem expedita facilis fugiat fugit impedit inventore iste
        natus obcaecati officia provident quam quo repudiandae, similique
        tenetur! Dolorum ex in maiores minus omnis optio praesentium, rerum sint
        vel vitae. Ex fuga perspiciatis porro! Aut doloremque ex expedita illo
        mollitia obcaecati quidem quod temporibus. Accusantium error explicabo
        id soluta vero. Accusamus alias autem dicta dolor dolore ea enim eos
        esse est excepturi fugit ipsam ipsum iste laborum libero nemo nihil
        perspiciatis placeat praesentium quis quos repudiandae sapiente sequi
        similique tempore ut voluptas, voluptate voluptates voluptatibus
        voluptatum. Animi aspernatur atque aut beatae, debitis delectus, dolorem
        doloribus ea excepturi facere fuga illo itaque laudantium molestias nisi
        obcaecati quaerat quibusdam quo rem suscipit tempore ullam unde veniam?
        Accusantium aliquam aliquid amet commodi consequatur deleniti, dolores
        fuga fugiat fugit incidunt odio perferendis porro tempora veniam,
        voluptatibus. Amet at atque, culpa deleniti earum eius expedita fuga
        fugit mollitia quae qui reiciendis repellat voluptates. Ab atque
        consequuntur, delectus dicta dolor est eum, expedita explicabo ipsam
        itaque non officia porro provident quasi quia rerum suscipit tenetur.
        Assumenda eius esse excepturi illo molestiae molestias non optio rem.
        Amet aperiam assumenda autem cupiditate delectus deserunt dicta
        distinctio dolor dolores doloribus, ducimus eos, et eum explicabo fugiat
        hic illo inventore magni maxime nam nemo nobis numquam pariatur quam
        quidem quod reprehenderit saepe vel voluptate voluptates. Animi
        blanditiis consectetur culpa cum cumque debitis delectus dignissimos
        dolores ducimus esse fuga fugit illo impedit itaque molestiae nisi non
        nostrum nulla numquam odio odit pariatur placeat praesentium quaerat
        ratione repellat repellendus reprehenderit saepe sint tempore temporibus
        totam ullam unde vel veniam, voluptas voluptatum? Aspernatur consectetur
        culpa labore maxime minus saepe! Facere facilis harum ipsum laborum
        mollitia praesentium provident quisquam, quod. Distinctio expedita modi
        mollitia sapiente similique. Consequuntur dignissimos dolorum iusto,
        nostrum porro qui sit veritatis. Ab aperiam, architecto beatae dolorem
        earum fugit, harum impedit minus nostrum ratione reprehenderit
        repudiandae? Accusantium beatae cum cumque debitis, exercitationem
        incidunt magnam maxime minima neque quidem quis quod! Ad assumenda
        beatae cumque doloribus earum enim et ex illo minima, modi molestiae
        molestias necessitatibus omnis quod recusandae, sit totam. Accusamus
        atque aut, beatae blanditiis consectetur doloremque enim esse, et
        expedita illum impedit molestias nobis non odit perspiciatis quae quo
        reprehenderit tempore. Amet debitis dolore expedita fuga illum iure
        labore, laborum omnis, placeat porro praesentium quia quibusdam
        repudiandae similique, suscipit totam velit! A architecto aspernatur
        deserunt est eum hic laboriosam laudantium maiores minima necessitatibus
        non nostrum perspiciatis quis quod, ratione recusandae repudiandae
        tempora tempore temporibus totam unde veniam voluptatem? Hic impedit
        libero magnam quas sed? Accusantium aliquid asperiores atque consectetur
        dolorem doloribus ducimus ea eligendi error excepturi harum impedit in
        labore molestias neque nihil nisi odit, optio perspiciatis placeat quam,
        qui quia quibusdam quod rem suscipit vero voluptates. Aperiam at debitis
        ea expedita hic, impedit ipsa ipsam non obcaecati vitae! Accusantium
        architecto asperiores aspernatur beatae consequatur cupiditate
        distinctio, enim eveniet ex fugit id ipsum, magni molestiae molestias
        nihil nisi perspiciatis placeat praesentium ratione repellat repellendus
        sunt suscipit, totam veniam veritatis voluptates voluptatibus. Aperiam
        incidunt inventore iusto magnam nisi pariatur quia. Adipisci aperiam
        asperiores, corporis cum debitis dolore doloremque doloribus eaque earum
        eius ex expedita fuga fugiat id impedit ipsam itaque nam, neque nobis
        nulla provident quasi quo quos reiciendis repudiandae suscipit totam
        unde! Accusamus alias architecto assumenda consectetur cum dolore, fuga
        hic labore laborum magnam minima molestiae omnis porro, quam, quia rem
        reprehenderit sit soluta vel veniam. A blanditiis enim fuga maxime nam
        numquam, obcaecati officia reiciendis veritatis! Amet eius eligendi est
        harum incidunt iusto non nostrum praesentium! Ab, accusantium commodi
        culpa dolore eligendi error facere fugiat fugit id ipsa iste sint
        suscipit, veritatis. Accusamus architecto, autem dolor ducimus eius
        eveniet fuga obcaecati officiis placeat quis, repellat sed soluta
        tempora? Animi asperiores consequuntur corporis in incidunt ipsum
        laudantium possimus, praesentium quae quasi quisquam, quod tempora
        voluptatum. Adipisci architecto, culpa cupiditate dolores ex facilis
        labore magni, nostrum obcaecati pariatur placeat recusandae repellat
        repudiandae tempora vel veritatis, voluptatibus! Ipsam, nemo, quae.
        Dolorum, eaque ipsam. A ad aperiam beatae consequatur consequuntur culpa
        cupiditate eligendi ex fugit illum ipsam ipsum labore modi molestiae
        necessitatibus, nemo neque nihil obcaecati porro quae quaerat quidem
        reprehenderit repudiandae saepe sint tempore voluptate! At atque beatae
        culpa cum, debitis delectus distinctio eius eligendi error, facilis
        fugiat iure modi nulla officia vero? Accusamus accusantium adipisci
        aliquid deleniti dignissimos dolor eos eum explicabo ipsa natus nihil,
        officia possimus reiciendis, rem tenetur ut vero. Ab beatae blanditiis
        commodi cupiditate dolorem ea libero minima minus necessitatibus, nobis,
        quas quasi qui quis recusandae reprehenderit totam ullam voluptate.
        Recusandae.
      </p>
    </>
  );
}
