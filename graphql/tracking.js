const Model = require("../db/models/tracking");

const type = `
  type Tracking {
    id: ID!
    visitor: String
    mobile: String
    meet: String
    purpose: String
    in_time: String
    out_time: String
  }

  enum TrackingPurpose {
    MEETING
    INTERVIEW
    DELIVERY
    OTHER
  }

  input CheckinInput {
    visitor: String!
    mobile: String!
    meet: String!
    purpose: TrackingPurpose!
  }
`;

const query = `
  trackings(limit: Int): [Tracking]
`;

const mutation = `
  checkin(input: CheckinInput): Tracking
  checkout(id: ID!): Boolean
`;

const resolver = {
  trackings: async ({ limit = 10 }) => {
    return await Model.findAll({ limit });
  },
  checkin: async ({ input }) => {
    return await Model.create({
      ...input,
      in_time: new Date(),
      out_time: null,
    });
  },
  checkout: async ({ id }) => {
    const update = await Model.update(
      {
        out_time: new Date(),
      },
      {
        where: { id },
      }
    );
    return update[0] !== 0;
  },
};

module.exports = { type, query, mutation, resolver };
