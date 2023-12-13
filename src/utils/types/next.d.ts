import { Server as NetServer, Socket } from "net";
import {
  NextApiResponse,
  NextComponentType,
  NextLayoutComponentType,
  NextPageContext,
} from "next";
import { Server as SocketIOServer } from "socket.io";

/* eslint-disable @typescript-eslint/ban-types */
import type { AppProps } from "next/app";
import { ReactNode } from "react";

declare module "next" {
  type NextLayoutComponentType<P = {}> = NextComponentType<
    NextPageContext,
    unknown,
    P
  > & {
    getLayout?: (page: ReactNode) => ReactNode;
  };
}

declare module "next/app" {
  type AppLayoutProps<P = {}> = AppProps & {
    Component: NextLayoutComponentType;
  };
}

export type NextApiResponseServerIO = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: SocketIOServer;
    };
  };
};
