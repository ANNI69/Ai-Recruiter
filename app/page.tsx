"use client";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState, useEffect } from "react";
import HomePage from "./pages/home/page";
import { useAuth, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
// import { useAppContext } from "@/context/AppContext";

export default function Home() {
  const { user } = useUser();
  const { isLoaded, userId } = useAuth();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const { isAuthenticated, setIsAuthenticated } = useAppContext();

  useEffect(() => {
    if (user) {
      router.push("/dashboard/profile");
    }
  }, [isLoaded, userId, router]);

  const navItems = [
    {
      name: null,
      link: null
    },
  ];

  return (
    <>
      <HomePage />
    </>
  );
}
