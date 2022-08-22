import { View, Text } from 'react-native'
import React, { createContext, useState } from 'react'
import { login } from '@components/service/UserService';

export const UserContext = createContext(null);

export const UserContextProvider = (props: any) => {
    const { children } = props
    const [userInfo, setUserInfo] = useState<any>({})

    const onLogin = async (id: string) => {
        const res = await login(id)
        const { error }: any = res;
        if (!error) {
            setUserInfo(res.data)
        }
        return res
    }

    return (
        <UserContext.Provider
            value={{
                userInfo,
                setUserInfo,
                onLogin,
            }}>
            {children}
        </UserContext.Provider>
    )
}
