class CreateTrades < ActiveRecord::Migration[7.0]
  def change
    create_table :trades do |t|
      t.string :platform
      t.text :description
      t.timestamps
    end
  end
end
