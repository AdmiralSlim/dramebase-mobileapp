import React from 'react';
import styled from 'styled-components';
import useThemes from 'root/hooks/useThemes';

const TextWrapper = styled.Text`
  text-align: ${({ align }) => align || 'left'};
  color: ${({ variant, themes }) => (variant ? themes.colors[variant] : themes.colors.white)};
  font-family: ${({ themes, weight }) => {
    switch (weight) {
      case 'regular':
        return themes.fonts.primaryRegular;
      case 'medium':
        return themes.fonts.primaryMedium;

      case 'semiBold':
        return themes.fonts.primarySemiBold;

      case 'bold':
        return themes.fonts.primaryBold;

      default:
        return themes.fonts.primaryRegular;
    }
  }};
`;

const Text1Wrapper = styled(TextWrapper)`
  font-size: 16px;
  line-height: 20px;
`;

const Text2Wrapper = styled(TextWrapper)`
  font-size: 14px;
  line-height: 16px;
`;

const Text3Wrapper = styled(TextWrapper)`
  font-size: 12px;
  line-height: 14px;
`;

const Text4Wrapper = styled(TextWrapper)`
  font-size: 10px;
  line-height: 12px;
`;

export const Text1 = ({ children, ...props }) => {
  const { themes } = useThemes();
  return (
    <Text1Wrapper {...props} themes={themes}>
      {children}
    </Text1Wrapper>
  );
};

export const Text2 = ({ children, ...props }) => {
  const { themes } = useThemes();
  return (
    <Text2Wrapper {...props} themes={themes}>
      {children}
    </Text2Wrapper>
  );
};

export const Text3 = ({ children, ...props }) => {
  const { themes } = useThemes();
  return (
    <Text3Wrapper {...props} themes={themes}>
      {children}
    </Text3Wrapper>
  );
};

export const Text4 = ({ children, ...props }) => {
  const { themes } = useThemes();
  return (
    <Text4Wrapper {...props} themes={themes}>
      {children}
    </Text4Wrapper>
  );
};

const HeadingWrapper = styled(TextWrapper)`
  font-family: ${({ themes }) => themes.fonts.primaryBold};
`;

const HeadingOneWrapper = styled(HeadingWrapper)`
  font-size: 26px;
  line-height: 30px;
`;

const HeadingTwoWrapper = styled(HeadingWrapper)`
  font-size: 24px;
  line-height: 28px;
`;

const HeadingThreeWrapper = styled(HeadingWrapper)`
  font-size: 20px;
  line-height: 24px;
`;

const HeadingFourWrapper = styled(HeadingWrapper)`
  font-size: 16px;
  line-height: 19px;
`;

const HeadingFiveWrapper = styled(HeadingWrapper)`
  font-size: 14px;
  line-height: 16px;
`;

const HeadingSixWrapper = styled(HeadingWrapper)`
  font-size: 12px;
  line-height: 14px;
`;

export const HeadingOne = ({ children, ...props }) => {
  const { themes } = useThemes();
  return (
    <HeadingOneWrapper themes={themes} {...props}>
      {children}
    </HeadingOneWrapper>
  );
};

export const HeadingTwo = ({ children, ...props }) => {
  const { themes } = useThemes();
  return (
    <HeadingTwoWrapper themes={themes} {...props}>
      {children}
    </HeadingTwoWrapper>
  );
};

export const HeadingThree = ({ children, ...props }) => {
  const { themes } = useThemes();
  return (
    <HeadingThreeWrapper themes={themes} {...props}>
      {children}
    </HeadingThreeWrapper>
  );
};

export const HeadingFour = ({ children, ...props }) => {
  const { themes } = useThemes();
  return (
    <HeadingFourWrapper themes={themes} {...props}>
      {children}
    </HeadingFourWrapper>
  );
};

export const HeadingFive = ({ children, ...props }) => {
  const { themes } = useThemes();
  return (
    <HeadingFiveWrapper themes={themes} {...props}>
      {children}
    </HeadingFiveWrapper>
  );
};

export const HeadingSix = ({ children, ...props }) => {
  const { themes } = useThemes();
  return (
    <HeadingSixWrapper themes={themes} {...props}>
      {children}
    </HeadingSixWrapper>
  );
};

const ErrorMessageWrapper = styled.Text`
  color: ${({ themes: { colors } }) => colors.red};
  font-size: 12px;
`;

export const ErrorMessage = ({ children, ...props }) => {
  const { themes } = useThemes();
  return (
    <ErrorMessageWrapper themes={themes} {...props}>
      {children}
    </ErrorMessageWrapper>
  );
};
