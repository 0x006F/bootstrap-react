const buildClassName = (element, options, additionalClasses) => {
  const selectedOptions = Object.keys(options).filter(
    option => options[option] === true
  );
  const classNames = selectedOptions
    .map(option => `${element}-${option}`)
    .join(" ");
  return `${element} ${classNames} ${additionalClasses}`;
};

export default buildClassName;
