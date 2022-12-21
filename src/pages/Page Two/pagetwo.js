import {
  LearnMore,
  PageTwoImage,
  PageTwoTextContainer,
  PageTwoTitle,
  PageTwoTextHalf,
  PageTwoText,
} from "./styles.pagetwo.js";

export default function PageTwo() {
  return (
    <LearnMore className='.learn'>
      <PageTwoImage />
      <PageTwoTextHalf>
        <PageTwoTextContainer>
          <PageTwoTitle>What is Oceanah?</PageTwoTitle>
          <PageTwoText>
            Swimming in the ocean is a truly magical experience. The feeling of
            the cool, salty water rushing over your skin is invigorating, and
            the vast expanse of the ocean is endlessly captivating. Whether
            you're floating on your back, diving beneath the waves, or splashing
            through the shallows, there's something about the ocean that just
            feels free and liberating. The ocean is also home to a vast array of
            fascinating marine life, from playful dolphins and graceful whales,
            to colorful fish and curious crabs. Spending time in the ocean can
            be a great way to connect with nature and escape the stresses of
            everyday life. So why wait? Dive in and discover the joys of
            swimming in the ocean!
          </PageTwoText>
        </PageTwoTextContainer>
      </PageTwoTextHalf>
    </LearnMore>
  );
}
