import { ReactNode, createContext, useContext, useState } from "react";
import { Product } from "./types"
import { QueryClient, QueryClientProvider } from "react-query";

type GlobalContextType = {
    selectedProduct: Product | null;
    setSelectedProduct: (product: Product | null) => void;
}
const GloabalContext = createContext<GlobalContextType | undefined>(undefined)

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

    return (
        <GloabalContext.Provider value={{ selectedProduct, setSelectedProduct }}>
            { children }
        </GloabalContext.Provider>
    )
}

export const useGlobalContext = (): GlobalContextType => {
    const context = useContext(GloabalContext)
    if (!context) {
      throw new Error('useGlobalContext must be used within a GlobalProvider');
    }
    return context;
};

const queryClient = new QueryClient()

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => (
    <QueryClientProvider client={queryClient}>
        <GlobalProvider>
            {children}
        </GlobalProvider>
    </QueryClientProvider>
)
