import React from "react";
import { motion } from "framer-motion";

export default function Mascot({ size = 260 }) {
  const stepCount = 5;
  const stepWidth = 40;
  const stepHeight = 10;
  const baseX = 40;
  const baseY = 160;

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 220 220"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible" }}
    >
      <defs>
        <linearGradient id="arrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4fd1c5" />
          <stop offset="50%" stopColor="#63b3ed" />
          <stop offset="100%" stopColor="#667eea" />
        </linearGradient>
        
        <linearGradient id="particleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffd700" />
          <stop offset="100%" stopColor="#ff6b6b" />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <filter id="softShadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
          <feOffset dx="0" dy="2" result="offsetblur"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3"/>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Animated background particles */}
      {[...Array(8)].map((_, i) => (
        <motion.circle
          key={`particle-${i}`}
          r="2"
          fill="url(#particleGrad)"
          opacity="0.6"
          animate={{
            cx: [60 + i * 20, 80 + i * 20, 60 + i * 20],
            cy: [180 - i * 15, 160 - i * 15, 180 - i * 15],
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            delay: i * 0.2,
            duration: 2.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Enhanced shadow with pulse */}
      <motion.ellipse
        cx="110"
        cy="200"
        rx="50"
        ry="8"
        fill="rgba(0,0,0,0.4)"
        animate={{ 
          scaleX: [1, 1.15, 0.95, 1],
          opacity: [0.4, 0.6, 0.15, 0.4]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated Steps with enhanced effects */}
      {[...Array(stepCount)].map((_, i) => (
        <g key={i}>
          {/* Step highlight/shine effect */}
          <motion.rect
            x={baseX + i * stepWidth * 0.4}
            y={baseY - i * stepHeight}
            width={stepWidth}
            height={stepHeight}
            fill="#0284c0ff"
            opacity="0.3"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.5, 0],
              scaleY: [1, 1.1, 1]
            }}
            transition={{
              delay: i * 0.3 + 0.5,
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
       
          {/* Step edge highlight */}
          <motion.line
            x1={baseX + i * stepWidth * 0.4}
            y1={baseY - i * stepHeight}
            x2={baseX + i * stepWidth * 0.4 + stepWidth}
            y2={baseY - i * stepHeight}
            stroke="rgba(58, 199, 255, 0.5)"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0.3] }}
            transition={{
              delay: i * 0.3,
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </g>
      ))}

      {/* Sparkle effects at the top */}
      {[...Array(3)].map((_, i) => (
        <motion.path
          key={`sparkle-${i}`}
          d="M 0,-4 L 0.5,-1 L 3,0 L 0.5,1 L 0,4 L -0.5,1 L -3,0 L -0.5,-1 Z"
          fill="#ffd700"
          filter="url(#glow)"
          animate={{
            x: [baseX + 30 + i * 15, baseX + 35 + i * 15],
            y: [baseY - stepCount * stepHeight - 20, baseY - stepCount * stepHeight - 30],
            scale: [0, 1.5, 0],
            rotate: [0, 180, 360],
            opacity: [0, 1, 0],
          }}
          transition={{
            delay: 1 + i * 0.4,
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Arrow pointer at top */}
      <motion.g
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.path
          d={`M ${baseX + stepWidth * 2} ${baseY - stepCount * stepHeight - 15} 
              L ${baseX + stepWidth * 2 + 12} ${baseY - stepCount * stepHeight - 5}
              L ${baseX + stepWidth * 2 + 6} ${baseY - stepCount * stepHeight - 5}
              L ${baseX + stepWidth * 2 + 6} ${baseY - stepCount * stepHeight + 5}
              L ${baseX + stepWidth * 2 - 6} ${baseY - stepCount * stepHeight + 5}
              L ${baseX + stepWidth * 2 - 6} ${baseY - stepCount * stepHeight - 5}
              L ${baseX + stepWidth * 2 - 12} ${baseY - stepCount * stepHeight - 5} Z`}
          fill="url(#arrowGrad)"
          filter="url(#glow)"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.g>

      {/* Success text */}
      <motion.text
        x="120"
        y="50"
        textAnchor="middle"
        fill="url(#arrowGrad)"
        fontSize="20"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
        filter="url(#glow)"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: [0, 1, 1, 1, 0],
          y: [40, 30, 30, 30, 20],
          scale: [0.8, 1, 1, 1, 1.1]
        }}
        transition={{
          delay: 2.5,
          duration: 3,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "easeOut",
        }}
      >
        Progress!
      </motion.text>
    </motion.svg>
  );
}