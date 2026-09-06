import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/**
 * Link / useRouter / usePathname conscients de la locale.
 * À utiliser partout dans les composants v3 à la place de next/link.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
