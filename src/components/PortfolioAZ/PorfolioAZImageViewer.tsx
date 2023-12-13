import React, { forwardRef } from 'react';

const PortfolioAZImageViewer = forwardRef<HTMLDivElement, {}>((props, ref) => {
    return (
        <div ref={ref} className="imageViewer z-0">
            <div className={`bg-[#111111] w-[400px] h-[300px] rounded-2xl`}>
                {/* content of the image viewer */}
            </div>
        </div>
    );
});

export default PortfolioAZImageViewer;
