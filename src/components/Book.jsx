import HTMLFlipBook from "react-pageflip";
import Page from "./Page";

export default function Book() {
  return (
    <HTMLFlipBook
      width={350}
      height={500}
      size="fixed"
      minWidth={315}
      maxWidth={1000}
      minHeight={400}
      maxHeight={1536}
      maxShadowOpacity={0.5}
      showCover={true}
      mobileScrollSupport={true}
    >
      <Page number={1}>Couverture</Page>
      <Page number={2}>Page 1</Page>
      <Page number={3}>Page 2</Page>
      <Page number={4}>Page 3</Page>
      <Page number={5}>Dos</Page>
    </HTMLFlipBook>
  );
}
