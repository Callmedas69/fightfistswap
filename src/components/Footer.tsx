"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { socialLink } from "@/app/constants";

const Footer = () => {
  return (
    <div className="relative bg-[#324c9b] w-full lg:px-5">
      <div className="flex flex-col md:flex-row items-center md:items-start px-8 md:px-20 py-5 text-xl md:text-2xl justify-between gap-4">
        <div className="flex flex-row gap-5">
          {socialLink.map((social, index) => (
            <div key={index}>
              <motion.div
                whileHover={{ scale: [null, 1.2, 1.1] }}
                transition={{ duration: 0.3 }}
              >
                <Link href={social.link} target="_blank">
                  <Image
                    src={social.icons}
                    alt={social.social}
                    width={20}
                    height={20}
                    className="bg-white rounded-full w-10  "
                  />
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
        <div className=" flex text-white text-lg font-bold text-center my-auto items-center md:text-left">
          JOIN THE FIGHT ACROSS X & TG + WIN NFT
        </div>
      </div>
    </div>
  );
};

export default Footer;
