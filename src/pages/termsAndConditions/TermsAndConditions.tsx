import React from 'react';

// ** Components
import ContentPolitics from '../shared/ContentPolitics/ContentPolitics';


/**
 * A React functional component that renders a page with the terms and conditions of Norte 19,
 * by using the ContentPolitics component.
 *
 * @return {React.JSX.Element} The JSX element representing the page with the terms and conditions.
 * @example
 * <TermsAndConditions />
 */
const TermsAndConditions = (): React.JSX.Element => {

  return (
    <ContentPolitics url="api/terms-and-condition" />
  );
};

export default TermsAndConditions;
