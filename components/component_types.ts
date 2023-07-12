type HeadingLargest = 'h1';
type HeadingLarger = 'h2';
type HeadingLarge = 'h3';
type HeadingMedium = 'h4';
type HeadingSmall = 'h5';
type HeadingSmaller = 'h6';
type Paragraph = 'p';
type InlineText = 'span';

export type TextVariant = [
    HeadingLargest,
    HeadingLarger,
    HeadingLarge,
    HeadingMedium,
    HeadingSmall,
    HeadingSmaller,
    Paragraph,
    InlineText
][number];
