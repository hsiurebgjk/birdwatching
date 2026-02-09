function simplify(value, unit) {
  if (unit !== 'g' || value < 1000) {
    return [value, unit];
  }

  return [value / 1000, 'kg'];
}

const Size = ({ value, unit, suffixes = [] }) => {
  if (!typeof value === 'object' || !typeof value.type === 'string') {
    return <></>;
  }

  if (value.type === 'value') {
    const [newValue, newUnit] = simplify(value.value, unit);
    return (
      <>
        {newValue}
        {newUnit}
        {suffixes.map((suffix, index) => (
          <span key={index}>&nbsp;{suffix}</span>
        ))}
      </>
    );
  }

  if (value.type === 'bodyTail') {
    const { body, tail } = value;
    const total = {
      value: body.value + tail.value,
      type: 'value',
    };

    return (
      <>
        <Size value={body} unit={unit} suffixes={[...suffixes, 'body']} />
        <br />
        <Size value={tail} unit={unit} suffixes={[...suffixes, 'tail']} />
        <br />
        <Size value={total} unit={unit} suffixes={[...suffixes, 'total']} />
      </>
    );
  }

  if (value.type === 'regional') {
    const { northern, southern } = value;

    return (
      <>
        <Size
          value={northern}
          unit={unit}
          suffixes={[...suffixes, 'North Island']}
        />
        <br />
        <Size
          value={southern}
          unit={unit}
          suffixes={[...suffixes, 'South Island']}
        />
      </>
    );
  }

  if (value.type === 'gendered') {
    const { male, female } = value;

    return (
      <>
        <Size value={male} unit={unit} suffixes={[...suffixes, '♂']} />
        <br />
        <Size value={female} unit={unit} suffixes={[...suffixes, '♀']} />
      </>
    );
  }
  return <>{value.type}</>;
};

export default Size;
