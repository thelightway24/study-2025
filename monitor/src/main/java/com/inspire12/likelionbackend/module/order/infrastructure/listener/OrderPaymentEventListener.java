package com.inspire12.likelionbackend.module.order.infrastructure.listener;

import com.inspire12.likelionbackend.module.order.infrastructure.listener.event.OrderToPaymentCompleteEvent;
import org.springframework.stereotype.Component;

@Component
public class OrderPaymentEventListener {
    // TODO Payment 완료 EVNET로 매개변수 변경

    public void handleOrderEvent(OrderToPaymentCompleteEvent event) {

    }
}
