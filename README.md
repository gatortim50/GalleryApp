
# Product Gallery App

This project is a React Native-based Product Gallery App that implements the following features:

## Features

- **Loading Skeleton**: Displays a loading skeleton while images load.
- **Pull-to-Refresh**: Supports pull-to-refresh functionality for refreshing the product list.
- **Error Handling with Retry**: Provides error handling with retry capability for failed API calls.
- **Product Detail View**:
  - Navigates to a detailed view when a product is selected.
  - Displays the last image from the product's images array.
  - Implements proper image caching using `react-native-fast-image`.
- **Smooth Transitions**: Includes smooth transitions between views.
- **Responsive Design**: Handles different screen sizes, including phones and tablets.
- **TypeScript Typing**: Proper typing with TypeScript for better maintainability and reliability.
- **State Management**: Uses Context API and React Query for managing global state and data fetching.
- **Performance Optimizations**: Includes optimizations for performance, such as flat list virtualization, image caching, and proper component structure.

---

## Evaluation Criteria Addressed

1. **Code Organization and Architecture**: The app is structured with modular and reusable components, proper folder organization, and separation of concerns.
2. **Component Reusability**: Components like `ProductCard` and `LoadingSkeleton` are reusable across views.
3. **State Management**: Global state is handled using Context API, and data fetching is efficiently managed using React Query.
4. **Performance**: Optimized for different screen sizes and platforms (iOS/Android), with proper image caching and list virtualization.
5. **Error Handling**: Includes retry logic for failed API requests and edge case handling (e.g., empty product list).
6. **Responsive Design**: Adapts to phones and tablets, with dynamic column layouts and proper scaling.
7. **Typing with TypeScript**: Ensures type safety and predictability.
8. **Test Coverage**: Basic unit and integration tests are included using `Jest` and `react-native-testing-library`.

---

## Prerequisites

1. **Node.js**: Install Node.js (>= 14.x). You can download it from [Node.js Official Website](https://nodejs.org/).
2. **React Native CLI**: Install the React Native CLI globally:
   ```bash
   npm install -g react-native-cli
   ```
3. **Xcode (for iOS)**:
   - Install Xcode from the Mac App Store.
   - Open Xcode and ensure you have the required command-line tools installed.
4. **Android Studio (for Android)**:
   - Install Android Studio from [Android Developers](https://developer.android.com/studio).
   - Configure an Android Virtual Device (AVD).
5. **Watchman**: Install Watchman using Homebrew (for macOS):
   ```bash
   brew install watchman
   ```
6. **Cocoapods**: Install Cocoapods (required for iOS dependencies):
   ```bash
   sudo gem install cocoapods
   ```

---

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/product-gallery-app.git
   cd product-gallery-app
   ```

2. **Install Dependencies**
   Run the following command to install all required dependencies:
   ```bash
   npm install
   ```

3. **Install iOS Pods (Required for iOS)**
   Navigate to the `ios` directory and install pods:
   ```bash
   cd ios
   pod install
   cd ..
   ```

4. **Start the Metro Bundler**
   Run the Metro Bundler in a terminal window:
   ```bash
   npm start
   ```

5. **Run the App**

   - **iOS**:
     ```bash
     npx react-native run-ios
     ```
     Make sure the iOS simulator is running.

   - **Android**:
     ```bash
     npx react-native run-android
     ```
     Ensure an Android emulator or a physical device is connected.

---

## Folder Structure

```
product-gallery-app/
├── android/                   # Android project files
├── ios/                       # iOS project files
├── src/                       # Source code
│   ├── api/                   # API services
│   ├── components/            # Reusable components (e.g., ProductCard, LoadingSkeleton)
│   ├── navigation/            # Navigation setup
│   ├── screens/               # Screen components (e.g., ProductListScreen, ProductDetailScreen)
│   ├── state/                 # Global state management (Context API)
│   ├── utils/                 # Utility functions
├── __tests__/                 # Test files
├── App.tsx                    # Main entry point
├── package.json               # Node.js dependencies
└── README.md                  # Project documentation
```

---

## Testing

1. **Run Tests**
   ```bash
   npm test
   ```

2. **Testing Libraries**
   - **Jest**: For unit and integration testing.
   - **react-native-testing-library**: For component testing.

---

## Assumptions Made During Implementation

1. The `fetchProducts` API endpoint provides a paginated list of products with required details such as title, price, rating, stock, and images.
2. The app is designed primarily for portrait mode but supports landscape mode for tablets.
3. Only core requirements were implemented to maintain focus on performance, architecture, and responsiveness.

---

## How to Build and Run the App for Evaluation

1. Follow the setup instructions above to install all dependencies.
2. Start the Metro Bundler:
   ```bash
   npm start
   ```
3. Build and run the app on iOS or Android:
   - iOS: `npx react-native run-ios`
   - Android: `npx react-native run-android`
4. Test features like pull-to-refresh, error handling, and responsive design on a physical device or simulator/emulator.

---

## Additional Notes

1. **Public Repository**: You can find the source code on GitHub:
   [https://github.com/your-username/product-gallery-app](https://github.com/gatortim50/GalleryApp/).
2. **Feedback**: Feel free to open an issue or submit a pull request for suggestions or improvements.

--- 

## Contact

For any questions or issues, contact me via [your-email@example.com](mailto:timthony.mckee@gmail.com).

--- 

This document ensures that the evaluator can easily set up, build, and run your project while understanding its architecture and implementation decisions.
