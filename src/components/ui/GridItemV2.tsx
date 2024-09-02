"use client";

import React, { useState, useMemo, CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";

interface GridItemProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  goto: string;
  className?: string;
}

const GridItemV2: React.FC<GridItemProps> = ({ 
  title, 
  subtitle, 
  imageSrc, 
  goto, 
  className = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const expandAmount = 50;

  const materialMattersContentStyle: CSSProperties = useMemo(
    () => ({
      height: "16rem",
      flex: 1,
      minWidth: "262px",
    }),
    []
  );

  const wrapperVariants = {
    initial: { height: "16rem", marginBottom: 0 },
    hover: {
      height: `calc(16rem + ${expandAmount}px)`,
      marginBottom: `${expandAmount}px`,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const imageContainerVariants = {
    initial: { height: "16rem" },
    hover: {
      height: `calc(16rem + ${expandAmount}px)`,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const overlayVariants = {
    initial: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const oliveContainerVariants = {
    initial: {
      width: "3.5rem",
      padding: "1rem 0.75rem",
      bottom: "-0.5rem",
    },
    hover: {
      width: "16rem",
      padding: "1rem 1.5rem",
      bottom: "-0.5rem",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const textVariants = {
    initial: { opacity: 0, width: 0 },
    hover: {
      opacity: 1,
      width: "auto",
      transition: { duration: 0.3, ease: "easeInOut", delay: 0.1 },
    },
  };

  const iconVariants = {
    initial: { x: 0 },
    hover: {
      x: "calc(100% - 2rem)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className={`relative ${className}`}
      style={materialMattersContentStyle}
      variants={wrapperVariants}
      initial="initial"
      animate={isHovered ? "hover" : "initial"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative w-full overflow-hidden"
        variants={imageContainerVariants}
      >
        <motion.div variants={imageVariants}>
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none"
              variants={overlayVariants}
              initial="initial"
              animate="hover"
              exit="initial"
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 border-4 border-darkolivegreen pointer-events-none"
              variants={overlayVariants}
              initial="initial"
              animate="hover"
              exit="initial"
            />
          )}
        </AnimatePresence>
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ top: "12.3px", padding: "59px 10px" }}
        >
          <div className="relative font-semibold z-10 text-white text-center">
            <p className="m-0">{title}</p>
            {subtitle && <p className="m-0">{subtitle}</p>}
          </div>
        </div>
        <img
          className="absolute left-[239px] w-[90px] h-[43.6px] z-10"
          loading="lazy"
          alt=""
          src="/assets/stories-touchpoint/mask.png"
          style={{ top: "11.3px" }}
        />
      </motion.div>

      <motion.div
        className="absolute left-0 bottom-0 bg-darkolivegreen flex items-center justify-between cursor-pointer overflow-hidden"
        variants={oliveContainerVariants}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        style={{
          zIndex: 10,
          bottom: "-1rem",
          left: "0",
        }}
        onClick={() => router.push(goto)}
      >
        <AnimatePresence>
          {isHovered && (
            <motion.span
              variants={textVariants}
              initial="initial"
              animate="hover"
              exit="initial"
              className="text-white font-urbanist text-lg whitespace-nowrap overflow-hidden flex-grow text-center"
            >
              Explore
            </motion.span>
          )}
        </AnimatePresence>
        <motion.div variants={iconVariants}>
          <ChevronRightIcon className="w-8 h-6 text-white" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default GridItemV2;