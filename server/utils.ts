import express from "express";
import { v4 as uuid } from "uuid";

export const generateToken = () => {
  return uuid();
};

export const getUser = (req: express.Request): Record<string, any> | undefined => {
  return req.session && (req.session as any).user;
};

export const setUser = (req: express.Request, newUser: Record<string, string>): void => {
  (req.session as any).user = newUser;
};
