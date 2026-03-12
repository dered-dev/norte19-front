import React from 'react';

// ** Components
import ContentPolitics from '../shared/ContentPolitics/ContentPolitics';

/**
 * Renders a component that displays the privacy notice policy
 * 
 * @returns {React.JSX.Element} - The JSX element of the component
 */
const PrivacyNotice = (): React.JSX.Element => {

  return (
    <ContentPolitics url="api/privacy-policy" />
  );
};

export default PrivacyNotice;
