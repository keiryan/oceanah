import {
  LearnMore,
  TopImage,
  BottomImage,
  PageFourTextContainer,
  PageFourTitle,
  PageFourTextHalf,
  PageFourText,
  PageFourImageContainer,
} from "./styles.pagefour.js";

export default function PageFour() {
  return (
    <LearnMore>
      <PageFourImageContainer>
        <TopImage />
        <BottomImage />
      </PageFourImageContainer>

      <PageFourTextHalf>
        <PageFourTextContainer>
          <PageFourTitle>
            <em>Where</em> is Oceanah?
          </PageFourTitle>
          <PageFourText>
            At Oceanah, we offer a network of worldwide, luxury beachside and
            island condos that provide the ultimate vacation experience. Our
            properties are located in some of the most sought-after destinations
            around the world, from the sunny beaches of Florida and the
            Caribbean, to the exotic islands of Thailand and the Philippines.
            Each of our condos is meticulously designed and appointed with every
            modern convenience, including fully equipped kitchens, comfortable
            bedrooms and living spaces, and private balconies or patios with
            breathtaking ocean views. In addition to the luxurious
            accommodations, our properties also offer access to a wide range of
            amenities, such as swimming pools, fitness centers, and on-site
            restaurants and bars. With Oceanah, you'll have the opportunity to
            escape to a world of luxury and relaxation, no matter where your
            travels may take you.
          </PageFourText>
        </PageFourTextContainer>
      </PageFourTextHalf>
    </LearnMore>
  );
}
