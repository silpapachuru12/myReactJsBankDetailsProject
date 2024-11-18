import React from 'react';
function BankDetails({ bankName, bankAddress, showDetails }) {
  return (
 <div style={{ marginTop: '20px' }}>
    {showDetails && (
        <>
          <p><strong>Bank Name:</strong> {bankName}</p>
          <p><strong>Bank Address:</strong> {bankAddress}</p>
        </>
      )}
 </div>
 );
}
export default BankDetails;
