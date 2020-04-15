const type = {
  boldItalic: 'RedHatText-Bold-Italic',
  bold: 'RedHatText-Bold',
  italic: 'RedHatText-Italic',
  mediumItalic: 'RedHatText-Medium-Italic',
  medium: 'RedHatText-Medium',
  regular: 'RedHatText-Regular',
};

const size = {
  title: 50,
  h1: 34,
  h2: 30,
  h3: 26,
  h4: 20,
  h6: 19,
  input: 18,
  regular: 17,
  f16: 16,
  small: 12,
  tiny: 8.5,
};

const style = {
  title: {
    fontFamily: type.bold,
    fontSize: size.title,
  },
  h1B: {
    fontFamily: type.bold,
    fontSize: size.h1,
  },
  f9m: {
    fontFamily: type.medium,
    fontSize: 9,
  },
  f10m: {
    fontFamily: type.medium,
    fontSize: 10,
  },
  f10r: {
    fontFamily: type.regular,
    fontSize: 10,
  },
  f10b: {
    fontFamily: type.bold,
    fontSize: 10,
  },
  f16m: {
    fontFamily: type.medium,
    fontSize: size.f16,
  },
  f16r: {
    fontFamily: type.regular,
    fontSize: size.f16,
  },
  f16b: {
    fontFamily: type.bold,
    fontSize: size.f16,
  },
  f11r: {
    fontFamily: type.regular,
    fontSize: 11,
  },
  f11m: {
    fontFamily: type.medium,
    fontSize: 11,
  },
  f12r: {
    fontFamily: type.regular,
    fontSize: 12,
  },
  f12m: {
    fontFamily: type.medium,
    fontSize: 12,
  },
  f12b: {
    fontFamily: type.bold,
    fontSize: 12,
  },
  f13r: {
    fontFamily: type.regular,
    fontSize: 13,
  },
  f14m: {
    fontFamily: type.medium,
    fontSize: 14,
  },
  f14r: {
    fontFamily: type.regular,
    fontSize: 14,
  },
  f14b: {
    fontFamily: type.bold,
    fontSize: 14,
  },
  f23b: {
    fontFamily: type.bold,
    fontSize: 23,
  },
  f24b: {
    fontFamily: type.bold,
    fontSize: 24,
  },
  f28b: {
    fontFamily: type.bold,
    fontSize: 28,
  },
  f26b: {
    fontFamily: type.bold,
    fontSize: 26,
  },
  f28m: {
    fontFamily: type.medium,
    fontSize: 28,
  },
  f18r: {
    fontFamily: type.regular,
    fontSize: 18,
  },
  f18m: {
    fontFamily: type.medium,
    fontSize: 18,
  },
  f18b: {
    fontFamily: type.bold,
    fontSize: 18,
  },
  f20m: {
    fontFamily: type.medium,
    fontSize: 20,
  },
  f38b: {
    fontFamily: type.bold,
    fontSize: 38,
  },
  h5: {
    fontFamily: type.regular,
    fontSize: size.h5,
  },
  h6: {
    fontFamily: type.light,
    fontSize: size.h6,
  },
  normal: {
    fontFamily: type.regular,
    fontSize: size.regular,
  },
  description: {
    fontFamily: type.regular,
    fontSize: size.medium,
  },
};

export default {
  type,
  size,
  style,
};
