import t from 'tcomb-form-native';

const Place = t.struct({
  name:t.String,
  price_range: t.maybe(t.Number),
  description: t.maybe(t.String),
  subway: t.maybe(t.String),
  style: t.maybe(t.String),
  address: t.maybe(t.String)
});

export default Place