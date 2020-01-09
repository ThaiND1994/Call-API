import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {
    onClickDelete=(id)=>{
        if(confirm('Bạn Có Muốn Xóa  Sản Phẩm Này Không?')){ //eslint-disable-line
            this.props.onDelete(id);
        }
    }
    render() {
        var { product, index } = this.props;
        var statusName = product.status ? 'Còn Hàng' : 'Hết Hàng';
        var statusClass = product.status ? 'success' : 'danger';
        return (
            <tr>
                <td className='text'>{index + 1}</td>
                <td className='text'>{product.id}</td>
                <td className='text'>{product.name}</td>
                <td className='text'>{product.price}</td>
                <td className='text'>
                    <span className={`label label-${statusClass}`}>{statusName}</span>
                </td>
                <td className='text'>
                    <Link to={`/product/${product.id}/edit`} 
                    className="btn btn-success" 
                    >Sửa</Link> &nbsp;
                <button 
                type="button" 
                className="btn btn-danger"
                onClick={()=> this.onClickDelete(product.id)}>Xóa</button>
                </td>
            </tr>
        );
    }
}
export default ProductItem;

