import React, {useCallback, useEffect, useRef} from 'react';
import LoadingDots from "../loading-dots/LoadingDots";

import styles from './about.module.scss';

interface AboutProps {
    companyInfo: string;
    isLoading: boolean;
}


export const About: React.FC<AboutProps> = ({ companyInfo, isLoading }) => {

    const makeUrlsClickable = useCallback((html: string): string => {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        return html.replace(urlRegex, '<a href="$1" target="_blank" class="link">$1</a>');
    }, [])

    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Make URLs clickable when component mounts
        if (!isLoading && companyInfo) {
            const processedHtml = makeUrlsClickable(companyInfo);
            if (contentRef.current) {
                contentRef.current.innerHTML = processedHtml;
            }
        }
    }, [companyInfo, isLoading]);

    return (
        <div className='mx-auto flex w-full max-w-xl flex-1 flex-col mt-16 text-xl 2xl:text-2xl gap-2'>
            <div>
                {isLoading ? <LoadingDots /> : <div ref={contentRef} className={styles.smoothText}></div>}
            </div>
        </div>
    );
};
