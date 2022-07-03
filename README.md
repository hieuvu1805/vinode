## HOW TO RUN

### 1. Run migration

1. Copy `.env.example` to `.env`
1. Update correct environment information
1. Run `yarn migration`

### 2. Start server

1. `yarn dev` Run on development environment.
1. `yarn start` Run on production environment.

## GraphQL query/mutation available

1. Test query

```graphql
{
  hello
}
```

1. Query `trackings`

```graphql
{
  trackings(limit: 10) {
    id
    visitor
    mobile
    meet
    purpose
    in_time
    out_time
  }
}
```

1. Mutation `checkin`

```graphql
mutation Checkin {
  checkin(
    input: {
      visitor: "visitor"
      mobile: "01234567"
      meet: "meet"
      purpose: OTHER
    }
  ) {
    id
    visitor
    mobile
    meet
    purpose
    in_time
    out_time
  }
}
```

3. Mutation `checkout`

```graphql
mutation Checkout {
  checkout(id: ID!)
}
```
