Here's how to fix the error using optional chaining and nullish coalescing:

```javascript
// bugSolution.js
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setData({ name: 'John Doe', age: 30 });
    }, 1000);
  }, []);

  return (
    <View>
      <Text>Name: {data?.name ?? 'Loading...'}</Text>  {/* Optional chaining and nullish coalescing */}
      <Text>Age: {data?.age ?? 'Loading...'}</Text>    {/* Optional chaining and nullish coalescing */}
    </View>
  );
};

export default MyComponent;
```

Optional chaining (`?.`) safely accesses properties, returning `undefined` if the object or any intermediate property is null or undefined. Nullish coalescing (`??`) provides a default value if the expression evaluates to `null` or `undefined`.