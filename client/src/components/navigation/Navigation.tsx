import React from 'react';

export const navigationRef = React.createRef<any>();

export function navigate(name: string, params: any) {
    navigationRef.current?.navigate(name, params);
}

export function goBack() {
    navigationRef.current?.goBack();
}

export function push(name: string, params: any) {
    navigationRef.current?.push(name, params);
}

export function replace(name: string, params: any) {
    navigationRef.current?.replace(name, params);
}

export function reset(index: any, name: string) {
    navigationRef.current?.reset({
        index,
        routes: [{ name }],
    });
}

export function pop(count: any) {
    navigationRef.current?.pop(count);
}