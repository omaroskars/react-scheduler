import React from 'react';

export default function ({ data }) {
  return (
    <div className="data-logger">
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    </div>
  )
}