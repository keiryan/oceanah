import {
  LearnMore,
  PageThreeImage,
  PageThreeTextContainer,
  PageThreeTitle,
  PageThreeTextHalf,
  PageThreeText,
} from "./styles.pagethree.js";

export default function PageThree() {
  return (
    <LearnMore>
      <PageThreeImage />
      <PageThreeTextHalf>
        <PageThreeTextContainer>
          <PageThreeTitle>
            <em>Why</em> is Oceanah?
          </PageThreeTitle>
          <PageThreeText>
            There's something truly special about staying at an island condo.
            Whether you're looking for a romantic getaway or a fun-filled family
            vacation, an island condo offers the perfect blend of relaxation and
            adventure. Imagine waking up to the sound of the waves crashing on
            the shore, and spending your days lounging on the beach, exploring
            the island's many attractions, or simply soaking up the sun on your
            private balcony. At night, you can dine on delicious local seafood,
            watch the sunset over the ocean, and fall asleep to the soothing
            sounds of the sea. With an island condo, you'll have all the
            comforts of home, plus the added convenience of being steps away
            from the sand and the water. So why wait? Start planning your dream
            island vacation today!
          </PageThreeText>
        </PageThreeTextContainer>
      </PageThreeTextHalf>
    </LearnMore>
  );
}
