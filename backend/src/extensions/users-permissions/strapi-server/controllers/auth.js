"use strict";

import { sanitize } from "@strapi/utils";

export default {
    async register(ctx) {
        const { username, email, password, roleType, phone, userStoreName } = ctx.request.body;

        if (!username || !email || !password) {
        return ctx.badRequest("Missing required fields: username, email, or password");
        }

        // تحديد الـ role ID بناءً على roleType
        let roleId = roleType === "seller" ? 4 : 3;

        // إنشاء المستخدم
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

        // إصدار JWT
        const jwt = strapi.plugin("users-permissions").service("jwt").issue({ id: user.id });

        // تجهيز البيانات للـ frontend
        const sanitizedUser = await sanitize.contentAPI.output(user, strapi.getModel("plugin::users-permissions.user"));

        ctx.send({
        jwt,
        user: sanitizedUser,
        });
    },
};