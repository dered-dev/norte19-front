import { useState, useEffect } from 'react';

// ** Hooks
import useHeader from '../useHeader/useHeader';
import { HeaderSection } from '../useHeader/useHeader.interface';

/**
 * A React hook that fetches the header data for a given URL.
 * The hook uses the `useHeader` hook to fetch the header data from the API.
 * The hook returns an object with a `headerData` property, which is the
 * header data for the given URL.
 *
 * @param {{ url: string }} options - Options object with a `url` property.
 * @returns {{ headerData: Header }} - An object with a `headerData` property.
 */
const useTitleHeader = ({ url }: { url: string }) => {
    const { data } = useHeader();

    const [headerData, setHeaderData] = useState<HeaderSection | null>(null);

    /**
     * Processes the header data by finding the section that matches the given URL
     * and setting it as the headerData state.
     */
    const processHeaderData = () => {
        const sections = data?.data.attributes.header_sections;
        const findSection = sections?.find((section) => section.url === url);
        if (findSection) {
            setHeaderData(findSection);
        }
    };

    useEffect(() => {
        if (!data) return;
        processHeaderData();
    }, [data]);

    return { headerData };
};

export default useTitleHeader;
