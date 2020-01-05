import passport from "passport";
import jwt from "jsonwebtoken";
import { Strategy, ExtractJwt } from "passport-jwt";
import { prisma } from "../../generated/prisma-client";
import "../env";

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET || "dev4us"
};

export const generateToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET || "dev4us");
};

export const authenticateJwt = (req, res, next) =>
  passport.authenticate("jwt", { sessions: false }, (error, user) => {
    if (user) {
      req.user = user;
    }
    next();
  })(req, res, next);

const verifyUser = async (payload, done) => {
  try {
    const user = await prisma.user({ id: payload.id });
    if (user !== null) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (error) {
    return done(error, false);
  }
};

passport.use(new Strategy(jwtOptions, verifyUser));
passport.initialize();
