type LintObj = {
  s: string;
};

const airbnblint = (): LintObj => {
  const obj: LintObj = {
    s: 'This is a string',
  };
  return obj;
};

export default airbnblint;
