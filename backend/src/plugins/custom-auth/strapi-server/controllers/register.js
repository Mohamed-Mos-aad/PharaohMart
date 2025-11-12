"use strict";
import { sanitize } from "@strapi/utils";

export default {
    async register(ctx) {
        const { username, email, password, roleType, phone, userStoreName } = ctx.request.body;

        if (!username || !email || !password) {
        return ctx.badRequest("Missing required fields");
        }

        const roleId = roleType === "seller" ? 4 : 3;

        const user = await strapi.db.query("plugin::users-permissions.user").create({
        data: {
            username,
            email,
            password,
            role: roleId,
            roleType,
            ...(roleType === "seller" && userStoreName ? { userStoreName } : {}),
            ...(phone ? { phone } : {}),
        },
        });

        const jwt = strapi.plugin("users-permissions").service("jwt").issue({ id: user.id });
        const sanitizedUser = await sanitize.contentAPI.output(user, strapi.getModel("plugin::users-permissions.user"));

        ctx.send({
        jwt,
        user: sanitizedUser,
        });
    },
};
