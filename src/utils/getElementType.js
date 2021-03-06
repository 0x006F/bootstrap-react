const getElementType = (component, props) => {
  const { defaultProps = {} } = component;
  const { as = "" } = props;
  const { as: defaultAs = "" } = defaultProps;

  if (as && as !== defaultAs) {
    return as;
  }

  return defaultAs || "div";
};

export default getElementType;
