import { Sequelize } from "sequelize";

const db = new Sequelize(
    `postgres://${process.env.POSTGRES_HOST}/${process.env.POSTGRES_DB}`
);

export {
    db,
};