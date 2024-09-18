"use client"; // Componente para el uso del lado del cliente
import React, { Suspense } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// Define una interfaz para los props del componente Pagination
interface PaginationProps {
    currentPage: number;
    hasPrev: boolean;
    hasNext: boolean;
}

// Componente Pagination
const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    hasPrev,
    hasNext,
}) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const createPageUrl = (pageNumber: number) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString());
        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="mt-12 flex justify-between w-full">
            <button
                className="rounded-md bg-tienda text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-300"
                disabled={!hasPrev}
                onClick={() => createPageUrl(currentPage - 1)}
            >
                Previa
            </button>
            <button
                className="rounded-md bg-tienda text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-300"
                disabled={!hasNext}
                onClick={() => createPageUrl(currentPage + 1)}
            >
                Siguiente
            </button>
        </div>
    );
};

// Componente SuspensePagination
const SuspensePagination: React.FC<PaginationProps> = (props) => (
    <Suspense fallback={<div>Loading pagination, please wait...</div>}>
        <Pagination {...props} />
    </Suspense>
);

export default SuspensePagination;
