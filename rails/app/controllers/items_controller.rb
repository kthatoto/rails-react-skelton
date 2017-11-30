class ItemsController < ApplicationController

  def index
    items = Item.all
    render json: { items: items }
  end

  def create
    item = Item.create(item_params)
    render json: {
      message: 'created',
      item: item,
    }
  end
  def destroy
    item = Item.find(params[:id])
    item.destroy
    render json: { message: 'deleted' }
  end

  private
    def item_params
      params.require(:item).permit(:name)
    end
end
