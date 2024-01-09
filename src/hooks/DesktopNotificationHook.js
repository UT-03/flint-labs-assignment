import { useEffect, useState } from "react"

const useDesktopNotification = () => {
    const [notificationPermission, setNotificationPermission] = useState(false);

    const checkNotificationPermission = async () => {
        if (Notification.permission === "granted") {
            setNotificationPermission(true);
        } else {
            const permission = await Notification.requestPermission();

            if (permission === "granted")
                setNotificationPermission(true);
        }
    }

    useEffect(() => {
        checkNotificationPermission();
    }, []);

    const showNotification = async (heading, icon, body) => {
        if (!notificationPermission)
            await checkNotificationPermission();

        const notification = new Notification(heading, {
            icon,
            body,
        });

        // dispatchEvent(notification);
    }

    return {
        showNotification
    };
}

export default useDesktopNotification;
