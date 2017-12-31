(ns spike-reagent.core
  (:require [reagent.core :as reagent :refer [atom]]
            [ajax.core :refer [POST GET]]))

(enable-console-print!)

(println "This text is printed from src/spike-reagent/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "New York Yankees is American baseball team."}))

(def url
  "https://spike-ring.work/")

;(def url
;  "http://localhost:8080")

(defonce output-state
         (atom {:text ""}))

(defn nativize
  []
  ;(GET url)
  (POST url {:handler (fn [x]
                        (println x)
                        (reset! output-state (cljs.reader/read-string x)))
             :headers {"Content-Type" "application/edn"}
             :body    (pr-str @app-state)
             :format  :raw}))

(defn hello-world []
  [:div
   [:textarea {:style     {:width     "100%"
                           :height    "8rem"
                           :font-size "1rem"}
               :on-change (fn [e]
                            (reset! app-state {:text (.-target.value e)}))}
    (:text @app-state)]
   [:br]
   [:button {:style    {:width     "100%"
                        :height    "2rem"
                        :font-size "1rem"}
             :on-click nativize} "Nativize"]
   [:h3 (:text @output-state)]])

(reagent/render-component [hello-world]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )
