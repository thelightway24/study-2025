package com.inspire12.likelionbackend.module.order.support.mapper;


import com.inspire12.likelionbackend.module.order.domain.Order;
import com.inspire12.likelionbackend.module.order.infrastructure.repository.entity.OrderEntity;

public class OrderMapper {


    public static Order toInitDomain(OrderEntity orderEntity) {
        return new Order(orderEntity.getId(),
                orderEntity.getOrderStatus(),
                orderEntity.getOrderNumber(),
                orderEntity.getCustomerId(),
                orderEntity.getStorePrice() + orderEntity.getDeliveryPrice(),
                orderEntity.getStoreId(),
                orderEntity.getStorePrice(),
                orderEntity.getOrderType(),
                null,
                orderEntity.getDeliveryStatus(),
                0L,
                orderEntity.getCreatedAt(),
                orderEntity.getUpdatedAt()
        );
    }
}
