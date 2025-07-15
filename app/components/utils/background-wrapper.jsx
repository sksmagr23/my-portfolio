'use client';
import ThreeJSBackground from './code-background-3d';
import Squares from './squares';

export default function BackgroundWrapper() {
  
  return (
    <>
      {/* Priority loaded backgrounds */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -10 }}>
        <Squares
          speed={0.3}
          squareSize={50}
          direction="diagonal"
          borderColor="#1c3bd9"
          hoverFillColor="#222"
        />
        <ThreeJSBackground />
      </div>
    </>
  );
}
